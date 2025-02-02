import React, { Component } from "react";
import PropTypes from "prop-types";

// This is an adapted version of the react-scratchcard module on npm:

class ScratchCard extends Component {
  constructor(props) {
    super(props);
    this.state = { loaded: false };
  }

  componentDidMount() {
    this.isDrawing = false;
    this.lastPoint = null;
    this.ctx = this.canvas.getContext("2d");

    const image = new Image();
    image.crossOrigin = "Anonymous";
    image.onload = () => {
      this.ctx.drawImage(image, 0, 0);
      this.setState({ loaded: true });
    };
    image.src = this.props.image;
  }

  getFilledInPixels(stride) {
    if (!stride || stride < 1) {
      stride = 1;
    }

    const pixels = this.ctx.getImageData(
      0,
      0,
      this.canvas.width,
      this.canvas.height
    );
    const total = pixels.data.length / stride;
    let count = 0;

    for (let i = 0; i < pixels.data.length; i += stride) {
      if (parseInt(pixels.data[i], 10) === 0) {
        count++;
      }
    }

    return Math.round((count / total) * 100);
  }

  getMouse(e, canvas) {
    let offsetX = 32;
    let offsetY = 24;
    let mx, my;

    if (canvas.offsetParent !== undefined) {
      do {
        offsetX += canvas.offsetLeft;
        offsetY += canvas.offsetTop;
      } while ((canvas = canvas.offsetParent));
    }

    mx = (e.pageX || e.touches[0].clientX) - offsetX;
    my = (e.pageY || e.touches[0].clientY) - offsetY;

    return { x: mx, y: my };
  }

  distanceBetween(point1, point2) {
    return Math.sqrt(
      Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2)
    );
  }

  angleBetween(point1, point2) {
    return Math.atan2(point2.x - point1.x, point2.y - point1.y);
  }

  handlePercentage(filledInPixels = 0) {
    if (filledInPixels > this.props.finishPercent) {
      this.canvas.parentNode.removeChild(this.canvas);
      this.setState({ finished: true });
      if (this.props.onComplete) {
        this.props.onComplete();
      }
    }
  }

  handleMouseDown(e) {
    this.isDrawing = true;
    this.lastPoint = this.getMouse(e, this.canvas);
    this.props.setStartDrawing();
  }

  handleMouseMove(e) {
    if (!this.isDrawing) {
      return;
    }

    const currentPoint = this.getMouse(e, this.canvas);
    const distance = this.distanceBetween(this.lastPoint, currentPoint);
    const angle = this.angleBetween(this.lastPoint, currentPoint);

    let x, y;

    for (let i = 0; i < distance; i++) {
      x = this.lastPoint.x + Math.sin(angle) * i;
      y = this.lastPoint.y + Math.cos(angle) * i;
      this.ctx.globalCompositeOperation = "destination-out";
      this.ctx.beginPath();
      this.ctx.arc(x, y, 40, 0, 2 * Math.PI, false);
      this.ctx.fill();
    }

    this.lastPoint = currentPoint;
    this.handlePercentage(this.getFilledInPixels(32));
  }

  handleMouseUp() {
    this.isDrawing = false;
  }

  render() {
    const containerStyle = {
      width: this.props.width + "px",
      height: this.props.height + "px",
      position: "relative",
      WebkitUserSelect: "none",
      MozUserSelect: "none",
      msUserSelect: "none",
      userSelect: "none"
    };

    const canvasStyle = {
      position: "absolute",
      top: 0,
      zIndex: 1
    };

    const resultStyle = {
      visibility: this.state.loaded ? "visible" : "hidden"
    };

    const canvasProps = {
      ref: ref => (this.canvas = ref),
      className: "ScratchCard__Canvas",
      style: canvasStyle,
      width: this.props.width,
      height: this.props.height,
      onMouseDown: this.handleMouseDown.bind(this),
      onTouchStart: this.handleMouseDown.bind(this),
      onMouseMove: this.handleMouseMove.bind(this),
      onTouchMove: this.handleMouseMove.bind(this),
      onMouseUp: this.handleMouseUp.bind(this),
      onTouchEnd: this.handleMouseUp.bind(this)
    };

    return (
      <div className="ScratchCard__Container" style={containerStyle}>
        <canvas {...canvasProps}></canvas>
        <div className="ScratchCard__Result" style={resultStyle}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

ScratchCard.propTypes = {
  image: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  finishPercent: PropTypes.number.isRequired,
  onComplete: PropTypes.func
};

export default ScratchCard;
