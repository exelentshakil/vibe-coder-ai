/**
 * Auto-generated Media Assets from Pexels API
 * Project: vibe-coder-ai
 * Zero attribution clutter on UI (Enterprise Clean Standard)
 */

export interface PhotoAsset {
  id: string;
  url: string;
  alt: string;
  avg_color: string;
}

export interface VideoAsset {
  id: string;
  videoUrl: string;
  posterUrl: string;
  width: number;
  height: number;
}

export interface MediaConfig {
  caseStudyPhoto: PhotoAsset;
  editorialPhotos: PhotoAsset[];
  ambientVideo: VideoAsset;
}

export const mediaConfig: MediaConfig = {
  caseStudyPhoto: {
    "id": "36598855",
    "url": "https://images.pexels.com/photos/36598855/pexels-photo-36598855.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "alt": "Software developer analyzing code on a tablet in a modern office workspace.",
    "avg_color": "#777F8C"
},
  editorialPhotos: [
    {
    "id": "270404",
    "url": "https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "alt": "Close-up of vibrant HTML code displayed on a computer screen, showcasing web development and programming.",
    "avg_color": "#2E2A24"
},
    {
    "id": "5474034",
    "url": "https://images.pexels.com/photos/5474034/pexels-photo-5474034.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "alt": "A bearded man with digital binary code projected on his face, symbolizing cybersecurity and technology.",
    "avg_color": "#646E66"
},
    {
    "id": "36706460",
    "url": "https://images.pexels.com/photos/36706460/pexels-photo-36706460.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "alt": "Software developer coding on dual monitors in a well-lit modern office, focused and engaged.",
    "avg_color": "#5B6463"
}
  ],
  ambientVideo: {
    "id": "17599632",
    "videoUrl": "https://videos.pexels.com/video-files/17599632/17599632-hd_1280_720_30fps.mp4",
    "posterUrl": "https://images.pexels.com/videos/17599632/3d-arcadian-cgi-digital-17599632.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200",
    "width": 1280,
    "height": 720
}
};
