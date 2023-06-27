import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterContentInit,
} from "@angular/core";

@Component({
  selector: "app-camera",
  template: `
    <h1>Camera App</h1>
    <video #videoElement autoplay></video>
    <button (click)="capture()" [disabled]="!isCameraReady">Capture</button>
    <canvas #canvasElement></canvas>
  `,
  styles: [],
})
export class CameraComponent implements AfterContentInit {
  ngAfterContentInit(): void {
    this.requestCameraPermission();
    throw new Error("Method not implemented.");
  }
  @ViewChild("videoElement", { static: true })
  videoElement: ElementRef<HTMLVideoElement>;
  @ViewChild("canvasElement", { static: true })
  canvasElement: ElementRef<HTMLCanvasElement>;

  hasCameraPermission: boolean;
  capturedImage: string;
  mediaStream: MediaStream;
  isCameraReady: boolean;

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
  // base64Image = '...'; // Replace with your base64 encoded image data

  convertToPNG() {
    const link = document.createElement('a');
    link.href = this.base64ToBlobURL(this.capturedImage);
    link.download = 'converted-image.png';
    link.click();
  }

  base64ToBlobURL(base64Image: string): string {
    const byteString = atob(base64Image.split(',')[1]);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const uint8Array = new Uint8Array(arrayBuffer);

    for (let i = 0; i < byteString.length; i++) {
      uint8Array[i] = byteString.charCodeAt(i);
    }
    debugger

    const blob = new Blob([arrayBuffer], { type: 'image/png' });
    const imageView = window.open();
    imageView.document.write(
      `<img [src]="blob" alt="captured Image" />`
    );
    return URL.createObjectURL(blob);
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
