export default function NoiseOverlay() {
  return (
    <div className="absolute inset-0 pointer-events-none z-50"
      style={{
        backgroundImage: `url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAIAAACRXR/mAAAAGXRFWHRTb2Z0d2Fy
        ZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAHFJREFUeNpiYBgFo2AUjIJRMApgYGBg+A8E
        /E8IMgBo1gPxH0S8DGgAmg2ED4j8PzGI0h0k8lGKCWj4fBgtQ2gGgGyI8RzAHYgA9Dq
        QawNo0RjUbgDojwHkH1P2bgNgAaFhUAwDCDAAAAwCDAAAAwFG0w4AfU4jVV2NGHIAAA
        AElFTkSuQmCC")`, // tiny noise image in Base64
        opacity: 100, // adjust strength
        mixBlendMode: "overlay", // blends into background
      }}
    />
  );
}
