const files = [
    {
    id: 'sample-dataset',
    title: 'Sample Dataset (legal)',
    desc: 'A tiny sample dataset for testing and workflow demos. Replace with your own legal files.',
    size: '12 KB',
    url: 'downloads/sample-dataset.txt'
    },
    {
    id: 'readme-archive',
    title: 'Research Notes (README).txt',
    desc: 'Markdown-exported research notes. Example only.',
    size: '3 KB',
    url: 'downloads/sample-dataset.txt'
    }
    ];


function buildCards(list){
const container = document.getElementById('cards');
container.innerHTML = '';
list.forEach(f => {
const card = document.createElement('div');
card.className = 'card';
card.innerHTML = `
<div class="title">${escapeHtml(f.title)}</div>
<div class="meta">${escapeHtml(f.desc)}</div>
<div style="display:flex;justify-content:space-between;align-items:center">
<div class="muted">${escapeHtml(f.size)}</div>
<div class="actions">
<a class="btn btn-ghost" href="${f.url}" download>Download</a>
<a class="btn" href="${f.url}" target="_blank">Preview</a>
</div>
</div>
`;
container.appendChild(card);
});
}


function escapeHtml(s){return String(s).replace(/[&<>\"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]))}


// search
const searchEl = document.getElementById('search');
searchEl.addEventListener('input', e => {
const q = e.target.value.toLowerCase();
const filtered = files.filter(f => (f.title+f.desc).toLowerCase().includes(q));
buildCards(filtered);
});


// populate
buildCards(files);


// misc UI
document.getElementById('year').textContent = new Date().getFullYear();


// theme toggle (simple — mostly decorative)
document.getElementById('theme-toggle').addEventListener('click', () => {
const el = document.documentElement;
if(el.style.filter){ el.style.filter = ''; } else { el.style.filter = 'hue-rotate(10deg) brightness(1.03)'; }
});