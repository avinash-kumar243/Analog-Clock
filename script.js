let hour = document.querySelector(".hour-hand");
let min = document.querySelector(".min-hand");
let sec = document.querySelector(".sec-hand");
let dh = document.querySelector(".dh");
let dm = document.querySelector(".dm");
let ds = document.querySelector(".ds");

setInterval(() => {
    let time = new Date();
    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();

    let hrotation = 30 * h + 0.5 * m + (0.5 / 60) * s;
    let mrotation = 6 * m + 0.1 * s;
    let srotation = 6 * s;

    hour.style.transform = `rotate(${hrotation}deg)`;
    min.style.transform = `rotate(${mrotation}deg)`;
    sec.style.transform = `rotate(${srotation}deg)`;

    dh.innerHTML = ((h > 12 ? h -= 12 : h) && (h<10 ? '0' + h : h));
    dm.innerHTML = m<10 ? '0' + m : m;
    ds.innerHTML = s<10 ? '0' + s : s;
})