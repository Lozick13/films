import { starsInterface } from './starsInterface.ts';
import { Star } from '../Star';

export const Stars = ({ count }: starsInterface) => {
  return (
    <>
      <ul className="card-body-stars u-clearfix">
        {Array.from({ length: count }, (_, index) => (
          <li key={index}>
            <Star></Star>
          </li>
        ))}
      </ul>
    </>
  );
};

Stars.defaultProps = {
  count: 0,
};
