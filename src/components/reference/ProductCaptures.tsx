import Image from 'next/image';
const captures = [
  {file:'dashboard',title:'Your working day',description:'A queue of recorded findings, overdue work and evidence gaps.'},
  {file:'assistant',title:'Ask about recorded work',description:'Review totals with a visible date scope and source record.'},
  {file:'setup',title:'Prepare your firm workspace',description:'Account access, imports and a checklist for your team to review.'},
];
export default function ProductCaptures(){
 return <section className="product-captures shell" aria-labelledby="product-captures-title"><span className="eyebrow">Inside Amaea</span><h2 id="product-captures-title">See the workspace.</h2><p>These screens are captured from the working app using fictional records. Your firm’s data stays in its own workspace.</p><div className="product-captures-grid">{captures.map(c=><figure key={c.file}><a href={`/product/${c.file}.png`} target="_blank" rel="noopener noreferrer" aria-label={`Open larger ${c.title} screenshot (new tab)`}><Image src={`/product/${c.file}.png`} alt={`${c.title} in Amaea’s app, populated with fictional test records`} width={1280} height={720} sizes="(max-width: 760px) 92vw, (max-width: 1200px) 46vw, 550px"/></a><figcaption><strong>{c.title}</strong><span>{c.description}</span></figcaption></figure>)}</div></section>
}
