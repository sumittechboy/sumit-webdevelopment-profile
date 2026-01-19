(function() {
    const downloadResourcesBtn = document.getElementById('downloadResourcesBtn');
    const downloadSourceBtn = document.getElementById('downloadSourceBtn');
    const projectPath = './practice_sessions/intellipaatProject';

    // List of all files in the project (from directory scan)
    const allFiles = [
        'index.html',
        'style.css',
        'code.gif',
        'Sumit resume.pdf',
        'icon/iccon1.png',
        'icon/icocn2.png',
        'icon/icon3.png',
        'icon/p1.png',
        'icon/p2.png',
        'icon/p3.png',
        'icon/p4.png',
        'icon/p5.png',
        'icon/social1.svg',
        'icon/social2.svg',
        'icon/social3.svg',
        'icon/social4.svg',
        'icon/social5.svg',
        'Lexend_Deca/LexendDeca-VariableFont_wght.ttf',
        'Lexend_Deca/OFL.txt',
        'Lexend_Deca/README.txt',
        'Lexend_Deca/static/LexendDeca-Black.ttf',
        'Lexend_Deca/static/LexendDeca-Bold.ttf',
        'Lexend_Deca/static/LexendDeca-ExtraBold.ttf',
        'Lexend_Deca/static/LexendDeca-ExtraLight.ttf',
        'Lexend_Deca/static/LexendDeca-Light.ttf',
        'Lexend_Deca/static/LexendDeca-Medium.ttf',
        'Lexend_Deca/static/LexendDeca-Regular.ttf',
        'Lexend_Deca/static/LexendDeca-SemiBold.ttf',
        'Lexend_Deca/static/LexendDeca-Thin.ttf'
    ];

    // Important resources (images, fonts, icons)
    const resourceFiles = allFiles.filter(f => !f.endsWith('.html') && !f.endsWith('.css') && !f.endsWith('.js'));

    async function downloadFiles(fileList, zipName) {
        const zip = new JSZip();
        let addedCount = 0;

        for (const file of fileList) {
            try {
                const response = await fetch(`${projectPath}/${file}`);
                if (response.ok) {
                    const blob = await response.blob();
                    zip.file(file, blob);
                    addedCount++;
                }
            } catch (err) {
                console.error(`Failed to fetch ${file}:`, err);
            }
        }

        if (addedCount > 0) {
            const content = await zip.generateAsync({ type: 'blob' });
            saveAs(content, zipName);
        } else {
            alert('Could not find any files to download.');
        }
    }

    function handleDownload(btn, fileList, zipName) {
        const originalText = btn.innerHTML;
        btn.disabled = true;
        btn.innerHTML = `<div class="loader"></div> Preparing...`;

        downloadFiles(fileList, zipName)
            .then(() => {
                btn.innerHTML = `✅ Ready!`;
                setTimeout(() => {
                    btn.disabled = false;
                    btn.innerHTML = originalText;
                }, 2000);
            })
            .catch(err => {
                console.error(err);
                btn.innerHTML = `❌ Error`;
                setTimeout(() => {
                    btn.disabled = false;
                    btn.innerHTML = originalText;
                }, 2000);
            });
    }

    downloadResourcesBtn.addEventListener('click', () => {
        handleDownload(downloadResourcesBtn, resourceFiles, 'intellipaat_resources.zip');
    });

    downloadSourceBtn.addEventListener('click', () => {
        handleDownload(downloadSourceBtn, allFiles, 'intellipaat_source_code.zip');
    });

})();
