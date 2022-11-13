import { LazyLoadImage } from 'react-lazy-load-image-component';
import './LazyLoadImageComp.css';

const LazyLoadImageComp = (props: any) => (
    <div className="lazyLoadImageComp">
        <LazyLoadImage
            alt={props.alt}
            height={props.height}
            src={props.src}
            width={props.width}
        />
    </div>
);

export default LazyLoadImageComp;
