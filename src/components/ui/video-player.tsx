interface VideoPlayerProps {
  url: string;
}

interface EmbedDetails {
  src: string;
  title: string;
}

function getEmbed(url: URL): EmbedDetails | null {
  const host = url.hostname.replace(/^www\./, "").toLowerCase();

  if (host === "youtu.be") {
    const videoId = url.pathname.slice(1).split("/")[0];
    return videoId
      ? {
          src: `https://www.youtube-nocookie.com/embed/${videoId}`,
          title: "YouTube video",
        }
      : null;
  }

  if (
    host === "youtube.com" ||
    host === "m.youtube.com" ||
    host === "youtube-nocookie.com"
  ) {
    if (url.pathname.startsWith("/embed/")) {
      const videoId = url.pathname.split("/")[2];
      if (videoId)
        return {
          src: `https://www.youtube-nocookie.com/embed/${videoId}`,
          title: "YouTube video",
        };
    }

    const shortsOrLiveId =
      url.pathname.match(/^\/(?:shorts|live)\/([^/?]+)/)?.[1];
    const videoId = url.searchParams.get("v") ?? shortsOrLiveId;
    return videoId
      ? {
          src: `https://www.youtube-nocookie.com/embed/${videoId}`,
          title: "YouTube video",
        }
      : null;
  }

  if (host === "vimeo.com" || host === "player.vimeo.com") {
    const videoId =
      url.pathname.match(/(?:video\/)?(\d+)/)?.[1] ??
      url.pathname.split("/").filter(Boolean).pop();
    return videoId
      ? { src: `https://player.vimeo.com/video/${videoId}`, title: "Vimeo video" }
      : null;
  }

  if (host === "dailymotion.com" || host === "dai.ly") {
    const videoId =
      host === "dai.ly"
        ? url.pathname.slice(1)
        : url.pathname.match(/\/video\/([^_/?]+)/)?.[1];
    return videoId
      ? {
          src: `https://www.dailymotion.com/embed/video/${videoId}`,
          title: "Dailymotion video",
        }
      : null;
  }

  return null;
}

export function VideoPlayer({ url }: VideoPlayerProps) {
  const trimmedUrl = url.trim();
  if (!trimmedUrl) return null;

  let parsedUrl: URL;
  try {
    parsedUrl = new URL(trimmedUrl);
  } catch {
    return null;
  }

  if (!["http:", "https:"].includes(parsedUrl.protocol)) return null;

  const embed = getEmbed(parsedUrl);
  if (embed) {
    return (
      <div className="relative aspect-video overflow-hidden rounded-lg border bg-black">
        <iframe
          src={embed.src}
          title={embed.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
          className="absolute inset-0 h-full w-full"
        />
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-lg border bg-black">
      <video
        src={parsedUrl.toString()}
        controls
        preload="metadata"
        className="aspect-video w-full"
      >
        Your browser does not support HTML5 video.
      </video>
    </div>
  );
}
