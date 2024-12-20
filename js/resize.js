function setMeter() {
    setMeter.counter ??= 0;
    setMeter.max ??= 1;
    setMeter.value = ((setMeter.counter + 1) / setMeter.max).toFixed(2);
    document.getElementById("meter").value = setMeter.value;
    document.getElementById('counter').value = setMeter.counter + 1;
    document.getElementById('current').value = document.getElementById('inpFile').files[setMeter.counter].name;
}
function downloadSingle() {
    setMeter.counter ??= 0;
    const files = document.getElementById('inpFile')?.files;
    if (files.length && setMeter.counter < files.length) {
        toggleButtons(true);
        const file = files[setMeter.counter];
        const a = add(document.body, 'a');
        getResizedImageDataURL(file)
            .then(href => forceDownload(a, href, file.name));
        a.remove();

        setMeter.counter++;
        setPreview();
        toggleButtons();
    } else {
        toggleButtons(true);
    }
};

function toggleButtons(disable = false) {
    const btns = document.getElementById('btns').querySelectorAll('button[type="button"]');
    pipe(
        [...btns]
        , map(btn => btn.disabled = disable)
    );
};

function fileSizeTotal(files, fileSize = 0) {
    for (let i = setMeter.counter; i < setMeter.max; i++) {
        fileSize += files[i].size;
    }
    return fileSize;
};

async function downloadZip(zip) {
    const inp = document.getElementById('inpFile');
    if (inp.files?.length) {
        inp.disabled = true;
        toggleButtons(true);

        for (let file; file = inp.files[setMeter.counter]; setMeter(), setMeter.counter++) {
            const [name, ext] = splitFileName(file.name);
            const href = await getResizedImageDataURL(file);
            const data = href.substr(href.indexOf(',') + 1);
            zip = await genZip(zip, data.length);
            zip.file(`${name}_rs.${ext}`, data, { base64: true });
        }

        genZip.data?.zipSize > 0 && await genZip(zip, -1).then(frmReset());
    }
}

async function genZip(zip, size = 0) {
    zip ??= new JSZip();
    genZip.data ??= {};
    let {
        zipSize= 0,
        counter= 0,
        
    } = genZip.data;

    const
        maxFileSize = 104857600
        , endSequence = size < 0;

    zipSize += +size;

    if ((zipSize > maxFileSize) || endSequence) {
        await zip.generateAsync({ type: 'blob' })
            .then(function (content) {
                saveAs(content, `images_${counter}.zip`);
                zipSize = 0;
                counter++;                
                zip = !endSequence && new JSZip()
            });
    }

    genZip.data = endSequence ? null: { zipSize, counter };
    return zip;
}

function splitFileName(filename) {
    return pipe(
        filename.split('.')
        , n => [n.slice(0, -1).join('.'), n.pop()]
    );
};

function forceDownload(a, href, filename) {
    const [name, ext] = splitFileName(filename);
    a.href = href;
    a.download = `${name}_rs.${ext}`;
    a.click();
};

function fileInput() {
    setMeter.counter = 0;
    setMeter.max = pipe(
        document.getElementById('inpFile')?.files
        , files => { return files ? files.length : 1 }
    );
    setPreview();
    toggleButtons();
}

function setPreview(el, file) {
    if (setPreview.idle ??= true) {
        if (file = document.getElementById('inpFile')?.files[setMeter.counter]) {
            const
                img = new Image(),
                inpH = document.getElementById('inpHeight'),
                inpW = document.getElementById('inpWidth'),
                inpS = document.getElementById('inpSize');

            img.onload = function () {
                setPreview.idle = false;
                const { height, width } = img;

                if (el) {
                    const option = el.closest('label').querySelector('input[type="radio"]').value;
                    const mod = setRatio(img);

                    img.height = height * mod;
                    img.width = width * mod;

                    inpH.value = option != 'height' ? img.height : inpH.value;
                    inpW.value = option != 'width' ? img.width : inpW.value;
                    inpS.value = option != 'size' ? ~~(mod * 100) : inpS.value;
                } else {
                    inpS.value = 100;
                    inpH.value = height;
                    inpW.value = width;
                }

                const prevDiv = document.getElementById('previewDiv');
                prevDiv.textContent = '';
                prevDiv.appendChild(img);

                setPreview.idle = true;
            }

            img.src = window.URL.createObjectURL(file);
        } else {
            frmReset();
        }
        setMeter();
    }
}

function fncFocus(el) {
    el.closest('label').querySelector('input[type="radio"]').checked = true;
}

function getResizedImageDataURL(file) {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext('2d');
    if (!ctx) {
        throw new Error('Context not available');
    }

    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onerror = reject;
        img.onload = function () {
            const scaleRatio = setRatio(img);
            const w = img.width * scaleRatio;
            const h = img.height * scaleRatio;
            canvas.width = w;
            canvas.height = h;
            ctx.drawImage(img, 0, 0, w, h);
            return resolve(canvas.toDataURL(file.type));
        }
        img.src = window.URL.createObjectURL(file);
    });
}

function setRatio(img) {
    const sizeChoice = document.querySelector('input[name="inpChoice"]:checked')?.value || 'default';
    return {
        size: () => +(document.getElementById('inpSize')?.value) / 100 || 1,
        height: () => +(document.getElementById('inpHeight')?.value) / img.height || 1,
        width: () => +(document.getElementById('inpWidth')?.value) / img.width || 1,
        default: () => 1
    }[sizeChoice]();
}

function frmReset() {
    document.getElementById('frmResize').reset();
    document.getElementById('previewDiv').textContent = '';
    document.getElementById('meter').value = 0;
    document.getElementById('inpFile').disabled = false;
    toggleButtons(true);
}

document.getElementById('frmResize').reset();