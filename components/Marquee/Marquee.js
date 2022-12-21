/* eslint-disable react/no-array-index-key */
import propTypes from 'prop-types';

const animationSpeed = {
  1: 'animate-[marqueeScroll_10s_linear_infinite]',
  2: 'animate-[marqueeScroll_20s_linear_infinite]',
  3: 'animate-[marqueeScroll_30s_linear_infinite]',
  4: 'animate-[marqueeScroll_40s_linear_infinite]',
  5: 'animate-[marqueeScroll_50s_linear_infinite]',
  6: 'animate-[marqueeScroll_60s_linear_infinite]'
};

const Marquee = ({ word, mode }) => {
  const array = new Array(5).fill(word);
  const anim = animationSpeed[mode] || animationSpeed[1];
  return (
    <div className="relative flex overflow-hidden gap-[var(--gap-space)]">
      <ul
        className={`flex-shrink-0 flex justify-around min-w-full ${anim} text-6xl uppercase font-heading gap-[var(--gap-space)`}>
        {array.map((a, i) => (
          <li key={`marquee-${a}-${i}`}>{a}</li>
        ))}
      </ul>

      <ul
        aria-hidden="true"
        className={`flex-shrink-0 flex justify-around min-w-full ${anim} text-6xl uppercase font-heading gap-[var(--gap-space)`}>
        {array.map((a, i) => (
          <li key={`marquee-hidden-${a}-${i}`}>{a}</li>
        ))}
      </ul>
    </div>
  );
};

Marquee.propTypes = {
  word: propTypes.string.isRequired,
  mode: propTypes.oneOf([1, 2, 3, 4, 5, 6])
};

Marquee.defaultProps = {
  mode: 1
};

export default Marquee;
