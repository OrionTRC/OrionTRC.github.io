function fixFile() {
    const files = document.getElementById('inpFile')?.files;
    for (const file of files) {
        generateThumbnail(file, 500, 500)
            .then(function (href) {
                const download = `tmb_${file.name}`;
                const a = add(document.body, 'a', { href, download });
                a.click();
                a.remove();
            });
    }
};

function generateThumbnail(file, ...boundBox) {
    boundBox = [...boundBox]
    if (boundBox.length != 2) {
        throw "You need to give the boundBox"
    }
    const canvas = document.createElement("canvas")
    const ctx = canvas.getContext('2d')
    if (!ctx) {
        throw new Error('Context not available')
    }

    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onerror = reject
        img.onload = function () {
            const scaleRatio = Math.min(...boundBox) / Math.max(img.width, img.height)
            const w = img.width * scaleRatio
            const h = img.height * scaleRatio
            canvas.width = w
            canvas.height = h
            ctx.drawImage(img, 0, 0, w, h)
            return resolve(canvas.toDataURL(file.type))
        }
        img.src = window.URL.createObjectURL(file)
    })
}