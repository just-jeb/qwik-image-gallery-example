import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import Gallery from '../components/gallery/gallery';


export default component$(() => {
  return (
    <Gallery/>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
};
