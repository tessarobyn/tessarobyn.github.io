const SvgDivider = ({ className, id }) => {
  return (
    <svg className={className} id={id} width="600" height="150">
      <g strokeWidth="2" fill="none">
        <g stroke="#11C6F8">
          <path d="M0 50 L200 50"></path>
          <circle cx="205" cy="50" r="5"></circle>
        </g>
        <g stroke="#0088ff">
          <path d="M0 75 L325 75"></path>
          <circle cx="332.5" cy="75" r="7.5"></circle>
        </g>
        <g stroke="#961ffd">
          <path d="M0 100 L550 100"></path>
          <circle cx="560" cy="100" r="10"></circle>
        </g>
      </g>
    </svg>
  );
};

export default SvgDivider;
