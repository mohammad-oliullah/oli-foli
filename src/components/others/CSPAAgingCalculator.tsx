"use client";

import { useEffect, useState } from "react";
import { Stamp, Plus, Trash2 } from "lucide-react";

// ---- Fixed case data ----
const FILING_DATE = new Date(2010, 10, 18); // Nov 18, 2010
const APPROVAL_DATE = new Date(2026, 8, 12); // Sep 12, 2026
const VISA_AVAILABLE_DATE = new Date(2026, 8, 1); // Sep 1, 2026

const STORAGE_KEY = "cspa-aging-calculator";

type Child = {
  id: number;
  name: string;
  dob: string;
};

function ymdDiff(start: Date, end: Date) {
  let sy = start.getFullYear();
  let sm = start.getMonth();
  let sd = start.getDate();

  let ey = end.getFullYear();
  let em = end.getMonth();
  let ed = end.getDate();

  let days = ed - sd;
  let months = em - sm;
  let years = ey - sy;

  if (days < 0) {
    months -= 1;
    days += new Date(ey, em, 0).getDate();
  }

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  return {
    years,
    months,
    days,
  };
}

function calcCSPA(birthDateStr: string) {
  if (!birthDateStr) return null;

  const [y, m, d] = birthDateStr.split("-").map(Number);
  const birth = new Date(y, m - 1, d);

  if (isNaN(birth.getTime())) return null;

  // I-130 pending time
  const pendingMs = APPROVAL_DATE.getTime() - FILING_DATE.getTime();

  // Subtract petition pending time from the beneficiary's age.
  const effectiveBirth = new Date(birth.getTime() + pendingMs);

  const cspaAge = ymdDiff(effectiveBirth, VISA_AVAILABLE_DATE);

  const realAge = ymdDiff(birth, VISA_AVAILABLE_DATE);

  const agedOut = cspaAge.years >= 21;

  return {
    cspaAge,
    realAge,
    agedOut,
  };
}

export default function CSPAAgingCalculator() {
  // Start completely empty.
  // All beneficiaries are added by the user.
  const [children, setChildren] = useState<Child[]>([]);

  const [nextId, setNextId] = useState(1);

  // Prevent saving the initial empty state before localStorage
  // has been loaded.
  const [loaded, setLoaded] = useState(false);

  // ------------------------------------------------------------
  // Load saved data from localStorage
  // ------------------------------------------------------------
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);

      if (!saved) {
        setLoaded(true);
        return;
      }

      const parsed = JSON.parse(saved);

      if (Array.isArray(parsed.children)) {
        setChildren(parsed.children);
      }

      if (typeof parsed.nextId === "number" && parsed.nextId > 0) {
        setNextId(parsed.nextId);
      }
    } catch (error) {
      console.error("Failed to load CSPA calculator data:", error);
    } finally {
      setLoaded(true);
    }
  }, []);

  // ------------------------------------------------------------
  // Save data to localStorage whenever it changes
  // ------------------------------------------------------------
  useEffect(() => {
    if (!loaded) return;

    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          children,
          nextId,
        }),
      );
    } catch (error) {
      console.error("Failed to save CSPA calculator data:", error);
    }
  }, [children, nextId, loaded]);

  // ------------------------------------------------------------
  // Update beneficiary
  // ------------------------------------------------------------
  const update = (id: number, field: "name" | "dob", value: string) => {
    setChildren((current) =>
      current.map((child) =>
        child.id === id
          ? {
              ...child,
              [field]: value,
            }
          : child,
      ),
    );
  };

  // ------------------------------------------------------------
  // Remove beneficiary
  // ------------------------------------------------------------
  const remove = (id: number) => {
    setChildren((current) => current.filter((child) => child.id !== id));
  };

  // ------------------------------------------------------------
  // Add beneficiary
  // ------------------------------------------------------------
  const add = () => {
    setChildren((current) => [
      ...current,
      {
        id: nextId,
        name: "",
        dob: "",
      },
    ]);

    setNextId((current) => current + 1);
  };

  return (
    <div
      className="min-h-full w-full"
      style={{
        background: "#E7E6DD",
      }}
    >
      <div className="max-w-2xl mx-auto px-5 py-8">
        {/* ================================================== */}
        {/* Header */}
        {/* ================================================== */}

        <div className="mb-8">
          <h1
            className="font-serif text-2xl mb-1"
            style={{
              color: "#22314F",
            }}
          >
            CSPA Aging-Out Calculator
          </h1>

          <p
            className="text-sm opacity-70"
            style={{
              color: "#22314F",
            }}
          >
            Add each derivative beneficiary and enter their birthdate to
            estimate their CSPA age.
          </p>
        </div>

        {/* ================================================== */}
        {/* Case Dates */}
        {/* ================================================== */}

        <div
          className="border-2 mb-6 p-4"
          style={{
            borderColor: "#22314F",
            background: "#F3F2EC",
          }}
        >
          <div
            className="grid grid-cols-3 gap-4 font-mono text-sm"
            style={{
              color: "#22314F",
            }}
          >
            <div>
              <div className="text-xs uppercase opacity-50">Priority Date</div>

              <div>Nov 18, 2010</div>
            </div>

            <div>
              <div className="text-xs uppercase opacity-50">Approval Date</div>

              <div>Sep 12, 2026</div>
            </div>

            <div>
              <div className="text-xs uppercase opacity-50">Visa Available</div>

              <div>Sep 1, 2026</div>
            </div>
          </div>
        </div>

        {/* ================================================== */}
        {/* Beneficiaries */}
        {/* ================================================== */}

        <div className="space-y-3">
          {children.map((child) => {
            // Result is only calculated/displayed when BOTH
            // name and DOB have been provided.
            const result =
              child.name.trim() && child.dob ? calcCSPA(child.dob) : null;

            return (
              <div
                key={child.id}
                className="border p-4"
                style={{
                  borderColor: "#22314F33",
                  background: "#F3F2EC",
                }}
              >
                <div className="flex gap-3 items-start">
                  {/* Inputs */}
                  <div className="flex-1 space-y-2">
                    <input
                      type="text"
                      value={child.name}
                      onChange={(e) => update(child.id, "name", e.target.value)}
                      placeholder="Name"
                      className="w-full bg-transparent border-b px-1 py-1 font-serif text-base outline-none"
                      style={{
                        borderColor: "#22314F55",
                        color: "#22314F",
                      }}
                    />

                    <input
                      type="date"
                      value={child.dob}
                      onChange={(e) => update(child.id, "dob", e.target.value)}
                      className="w-full bg-transparent border-b px-1 py-1 font-mono text-sm outline-none"
                      style={{
                        borderColor: "#22314F55",
                        color: "#22314F",
                      }}
                    />
                  </div>

                  {/* Delete */}
                  <button
                    type="button"
                    onClick={() => remove(child.id)}
                    className="p-2 opacity-50 hover:opacity-100 transition-opacity"
                    style={{
                      color: "#9B2C2C",
                    }}
                    aria-label="Remove beneficiary"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>

                {/* ================================================== */}
                {/* Result */}
                {/* ================================================== */}

                {result && (
                  <div className="mt-3 flex items-center justify-between gap-3">
                    <div
                      className="font-mono text-sm"
                      style={{
                        color: "#22314F",
                      }}
                    >
                      CSPA age:{" "}
                      <span className="font-semibold">
                        {result.cspaAge.years}y {result.cspaAge.months}m{" "}
                        {result.cspaAge.days}d
                      </span>
                      <span className="opacity-50">
                        {" "}
                        · actual age: {result.realAge.years}y
                      </span>
                    </div>

                    {/* Status stamp */}
                    <div
                      className="flex shrink-0 items-center gap-1.5 px-3 py-1 border-2 rotate-[-3deg] font-serif text-xs tracking-wider uppercase"
                      style={{
                        borderColor: result.agedOut ? "#9B2C2C" : "#3B6E4F",

                        color: result.agedOut ? "#9B2C2C" : "#3B6E4F",
                      }}
                    >
                      <Stamp size={13} />

                      {result.agedOut ? "Aged Out" : "Protected"}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* ================================================== */}
        {/* Empty State */}
        {/* ================================================== */}

        {children.length === 0 && (
          <div
            className="border border-dashed p-8 text-center"
            style={{
              borderColor: "#22314F44",
              color: "#22314F",
            }}
          >
            <p className="font-serif text-base opacity-70">
              No beneficiaries added yet.
            </p>

            <p className="text-xs font-mono opacity-50 mt-1">
              Add someone below to begin calculating.
            </p>
          </div>
        )}

        {/* ================================================== */}
        {/* Add Button */}
        {/* ================================================== */}

        <button
          type="button"
          onClick={add}
          className="mt-4 flex items-center gap-2 text-sm font-mono px-3 py-2 border"
          style={{
            borderColor: "#22314F55",
            color: "#22314F",
          }}
        >
          <Plus size={14} />
          Add another
        </button>

        {/* ================================================== */}
        {/* Saved Indicator */}
        {/* ================================================== */}

        <p
          className="mt-4 text-xs font-mono opacity-50"
          style={{
            color: "#22314F",
          }}
        >
          Changes are saved automatically on this device.
        </p>

        {/* ================================================== */}
        {/* Disclaimer */}
        {/* ================================================== */}

        <p
          className="mt-6 text-xs leading-relaxed opacity-60"
          style={{
            color: "#22314F",
          }}
        >
          Estimate for informational purposes only. The result depends on the
          applicable CSPA rules, the actual visa availability date, and whether
          the beneficiary satisfies the required “sought to acquire” condition.
        </p>
      </div>
    </div>
  );
}
