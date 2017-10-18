
function figureArea(params) {
    let [ w, h, W, H ] = params.map(Number);
    let firstRect = H*W;
    let secondRect = h*w;
    let sharedArea = Math.min(w,W)*Math.min(h,H);
    return firstRect+secondRect-sharedArea
}

console.log(figureArea(['13','2', '5','8']));