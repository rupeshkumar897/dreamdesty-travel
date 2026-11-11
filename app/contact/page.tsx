import { Metadata } from 'next';
import Contact from "@/components/Contact";

// export const metadata = {
//   title: 'Contact Us | Start Your Project With Craft & Anchor',
//   description: 'Ready to build something great? Schedule a call or send a message — we respond directly, with no middlemen slowing things down.',
//   alternates: {
//     canonical: 'https://www.craftandanchor.com/contact',
//   },
// };

export default function Services() {
  return (
    <main>
      <Contact />
   
    </main>
  );
}