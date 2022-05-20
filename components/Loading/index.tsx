interface LoadingProps {
  className?: string;
  color?: string;
  width?: number;
  height?: number;
}
const Loading: React.FC<LoadingProps> = ({ className, color, width = 50, height = 50 }: LoadingProps) => (
  <span className={className}>
    <span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 50 50"
      >
        <path fill={color}
          d="M25,5A20.14,20.14,0,0,1,45,22.88a2.51,2.51,0,0,0,2.49,2.26h0A2.52,2.52,0,0,0,50,22.33a25.14,25.14,0,0,0-50,0,2.52,2.52,0,0,0,2.5,2.81h0A2.51,2.51,0,0,0,5,22.88,20.14,20.14,0,0,1,25,5Z"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 25 25"
            to="360 25 25"
            dur="0.5s"
            repeatCount="indefinite"
          />
        </path>
      </svg>
    </span>
  </span>
);
export default Loading;