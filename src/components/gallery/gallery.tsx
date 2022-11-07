
import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './gallery.css?inline';

export const images = new Array(50).fill(0).map(() => (`https://picsum.photos/1200/800?random=${Math.random()}`));

export default component$(() => {
    useStylesScoped$(styles);

    return (
        <div class='gallery'>
            {images.map(src => <img src={src} />)}
        </div>
    );
});
