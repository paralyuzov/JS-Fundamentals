function cone(r,h) {
    let volume = (Math.PI * Math.pow(r,2) * h) / 3;
    let slantHight = Math.sqrt(Math.pow(r,2) + Math.pow(h,2));
    let leteralSurface = Math.PI * r * slantHight;
    let baseSurface = Math.PI * Math.pow(r,2);
    let totalArea = leteralSurface + baseSurface;
    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${totalArea.toFixed(4)}`);
}
cone(3,5)