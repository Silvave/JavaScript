
function volumeAndAreaCone([ h, r ]) {
    [ r, h ] = [ h, r ].map(Number);
    let s = Math.sqrt(r*r + h*h);
    let volume = Math.PI*(r*r)*h/3;
    let totalArea = Math.PI * r * (r + s);
    console.log(`volume = ${volume}`);
    console.log(`area = ${totalArea}`)
}

volumeAndAreaCone([`3`, `5`]);