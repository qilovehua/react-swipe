import PropTypes from 'prop-types';
import React, { Component } from 'react';
import objectAssign from 'object-assign';
import Swipe from './swipe';
import './style.css';

class ReactSwipe extends Component {
  static propTypes = {
    swipeOptions: PropTypes.shape({
      startSlide: PropTypes.number,
      margin: PropTypes.number,
      degree: PropTypes.number,
      speed: PropTypes.number,
      auto: PropTypes.number,
      continuous: PropTypes.bool,
      disableScroll: PropTypes.bool,
      stopPropagation: PropTypes.bool,
      swiping: PropTypes.func,
      callback: PropTypes.func,
      transitionEnd: PropTypes.func
    }),
    style: PropTypes.shape({
      container: PropTypes.object,
      wrapper: PropTypes.object,
      child: PropTypes.object
    }),
    id: PropTypes.string,
    className: PropTypes.string
  };

  static defaultProps = {
    swipeOptions: {},
    style: {
      container: {
        overflow: 'hidden',
        position: 'relative'
      },

      wrapper: {
        position: 'relative'
      },

      child: {
        float: 'left',
        width: '100%',
        position: 'relative',
        transitionProperty: 'transform'
      }
    },
    className: ''
  };

  constructor(props) {
    super(props);
    this.update = false;
  }

  componentDidMount() {
    const { swipeOptions } = this.props;

    this.swipe = Swipe(this.refs.container, swipeOptions);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.children && this.props.children && nextProps.children.length !== this.props.children.length) {
      console.log('==swipe==', nextProps.children.length, this.props.children.length);
      this.update = true;
    }
  }

  componentDidUpdate() {
    if (this.update) {
      this.update = false;
      this.swipe && this.swipe.setup();
    }
  }

  componentWillUnmount() {
    this.swipe.kill();
    this.swipe = void 0;
  }

  next() {
    this.swipe.next();
  }

  prev() {
    this.swipe.prev();
  }

  slide(...args) {
    this.swipe.slide(...args);
  }

  getPos() {
    return this.swipe.getPos();
  }

  getNumSlides() {
    return this.swipe.getNumSlides();
  }

  render() {
    const { id, className, style, children, swipeOptions } = this.props;

    return (
      <div ref="container" id={id} className={`react-swipe-container ${className}`} style={style.container}>
        <div className="swipe-wrap" style={style.wrapper}>
          {React.Children.map(children, (child) => {
            if (!child) {
              return null;
            }

            const childStyle = child.props.style ?
              objectAssign({}, style.child, child.props.style) :
              style.child;

            return React.cloneElement(child, {style: childStyle});
          })}
          {children.length === 2 && swipeOptions.continuous && React.Children.map(children, (child) => {
            if (!child) {
              return null;
            }

            const childStyle = child.props.style ?
              objectAssign({}, style.child, child.props.style) :
              style.child;

            return React.cloneElement(child, {style: childStyle});
          })}
        </div>
      </div>
    );
  }
}

export default ReactSwipe;
