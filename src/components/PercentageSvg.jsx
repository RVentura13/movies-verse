export const PercentageSvg = ({ percentage, width, height }) => {
  const radius = 50; // Radio del círculo
  const circumference = 2 * Math.PI * radius; // Circunferencia del círculo

  // Calcular la longitud de la porción a llenar
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (circumference * percentage) / 100;

  // Calcular la posición del texto
  const textX = 100; // Posición X del centro del texto
  const textY = 104; // Posición Y del centro del texto

  // let strokeColor = "";

  const strokeColor =
    percentage >= 70
      ? "#2ECC71"
      : percentage >= 50 && percentage < 70
      ? "#F39C12"
      : percentage < 50
      ? "#E74C3C"
      : "#BDC3C7";

  return (
    <svg
      className=""
      style={{ strokeDashoffset: strokeDashoffset }}
      width={width}
      height={height}
      viewBox="46 46 108 108"
    >
      <circle
        className="circle-bar"
        cx="100"
        cy="100"
        r={radius}
        fill="#212F3D"
        fillOpacity={0.7}
        stroke={strokeColor}
        strokeWidth="8"
        strokeLinecap="round"
        strokeDasharray={strokeDasharray}
        strokeDashoffset={strokeDashoffset}
      />

      <text
        fill="white"
        fontSize={35}
        x={textX}
        y={textY}
        textAnchor="middle"
        alignmentBaseline="middle"
      >
        {percentage}
      </text>
      <text
        fill="white"
        fontSize={15}
        x={130}
        y={100}
        textAnchor="middle"
        alignmentBaseline="start"
      >
        %
      </text>
    </svg>
  );
};
