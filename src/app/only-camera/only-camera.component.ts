import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";

@Component({
  selector: "only-camera",
  template: `
    <h1>Camera Only App</h1>
    <video #videoElement autoplay></video>
    <button (click)="capture()" [disabled]="!isCameraReady">Capture</button>
    <canvas hidden #canvasElement></canvas>
  `,
  styleUrls: ["./only-camera.component.scss"],
})
export class OnlyCameraComponent implements OnInit {
  @ViewChild("videoElement", { static: true })
  videoElement: ElementRef<HTMLVideoElement>;
  @ViewChild("canvasElement", { static: true })
  canvasElement: ElementRef<HTMLCanvasElement>;
  constructor() {}
  hasCameraPermission: boolean;
  capturedImage: string;
  mediaStream: MediaStream;
  isCameraReady: boolean;
  ngOnInit(): void {
    this.requestCameraPermission();
  }
  requestCameraPermission() {
    const video = this.videoElement.nativeElement;
    console.log(video);

    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream: MediaStream) => {
        if (stream.active) {
          this.hasCameraPermission = true;
          this.mediaStream = stream;
          video.srcObject = stream;
          video.onloadedmetadata = () => {
            this.isCameraReady = true;
          };
        }
      })
      .catch((err) => {
        console.error("Error accessing the camera: ", err);
        this.hasCameraPermission = false;
      });
  }
  capture() {
    const video = this.videoElement.nativeElement;
    const canvas = this.canvasElement.nativeElement;
    const context = canvas.getContext("2d");

    // Ensure video is playing and has loaded a frame
    if (this.isCameraReady && video.readyState === video.HAVE_ENOUGH_DATA) {
      // canvas.width = video.videoWidth;
      // canvas.height = video.videoHeight;

      // Draw the current video frame onto the canvas
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      this.capturedImage = canvas.toDataURL("image/png");
      console.log(this.capturedImage);
      // this.convertToPNG()
      // Stop the camera tracks
      if (this.mediaStream) {
        const tracks = this.mediaStream.getTracks();
        tracks.forEach((track) => track.stop());
      }
    }
  }
}
