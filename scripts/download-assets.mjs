import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, "..", "public");

const assets = [
  {
    url: "https://img1.wsimg.com/isteam/stock/ea74cd9997758b598b2adbc7720d9b59ae037928da57a8130b43a8f4eac6791b/:/rs=w:1920,m",
    dest: "images/hero-golf-cart-couple.jpg",
  },
  {
    url: "https://img1.wsimg.com/isteam/stock/11041/:/rs=w:1600,m",
    dest: "images/quote-beach-walk.jpg",
  },
  {
    url: "https://img1.wsimg.com/isteam/stock/86928/:/rs=w:1920,m",
    dest: "images/blog-section-bg.jpg",
  },
  {
    url: "https://img1.wsimg.com/isteam/stock/22306/:/rs=w:600",
    dest: "images/blog/why-bees-are-called-worker-bees.jpg",
  },
  {
    url: "https://img1.wsimg.com/isteam/stock/11399/:/rs=w:600",
    dest: "images/blog/saving-on-prescriptions-through-cost-plus.jpg",
  },
  {
    url: "https://img1.wsimg.com/isteam/ip/c6883304-bce4-4b99-88a8-6977ca5ced55/60228h-01-enus.png/:/rs=w:600",
    dest: "images/blog/a-pristine-vagina-brings-joy-to-all-women.png",
  },
  {
    url: "https://img1.wsimg.com/isteam/ip/c6883304-bce4-4b99-88a8-6977ca5ced55/turtle-plastic-sollution-1140x640-1.jpg/:/rs=w:600",
    dest: "images/blog/the-truth-about-microplastics-smarter-living.jpg",
  },
  {
    url: "https://img1.wsimg.com/isteam/ip/c6883304-bce4-4b99-88a8-6977ca5ced55/20240617_135606.jpg/:/rs=w:600",
    dest: "images/blog/interview-exclusive-sean-lanier-holmes.jpg",
  },
  {
    url: "https://img1.wsimg.com/isteam/ip/c6883304-bce4-4b99-88a8-6977ca5ced55/Stephen%20with%20Guitar%20Edited.jpg/:/rs=w:600",
    dest: "images/blog/interview-exclusive-3-hand-stephen.jpg",
  },
  {
    url: "https://img1.wsimg.com/isteam/ip/c6883304-bce4-4b99-88a8-6977ca5ced55/IMG_20231211_141735_673-01%20(1).jpeg/:/rs=w:600",
    dest: "images/blog/interview-exclusive-ural-thomas.jpg",
  },
  {
    url: "https://img1.wsimg.com/isteam/ip/static/pwa-app/logo-default.png/:/rs=w:180,h:180,m",
    dest: "seo/apple-touch-icon.png",
  },
];

async function downloadOne({ url, dest }) {
  const destPath = join(publicDir, dest);
  await mkdir(dirname(destPath), { recursive: true });
  const res = await fetch(url);
  if (!res.ok) {
    console.error(`FAILED (${res.status}): ${url}`);
    return;
  }
  const buf = Buffer.from(await res.arrayBuffer());
  await writeFile(destPath, buf);
  console.log(`OK  ${dest}  (${(buf.length / 1024).toFixed(1)} KB)`);
}

async function run() {
  const batchSize = 4;
  for (let i = 0; i < assets.length; i += batchSize) {
    const batch = assets.slice(i, i + batchSize);
    await Promise.all(batch.map(downloadOne));
  }
}

run();
