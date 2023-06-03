import React from "react";

import Lottie from "react-lottie-player";
// Alternatively:
// import Lottie from 'react-lottie-player/dist/LottiePlayerLight'

import reactAnimation from "../../public/react.json";

export default function HomeAnimation() {
  return <Lottie loop animationData={reactAnimation} play />;
}
