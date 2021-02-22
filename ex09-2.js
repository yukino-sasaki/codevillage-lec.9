//追加を押したら要素が増える。もっと良さげな書き方がありそう
const addbutton = document.getElementById('add')
const list = document.getElementById('list')
addbutton.addEventListener('click', (event) => {
    document.getElementById('add').onclick = function () {

        const newli = document.createElement('li')
        const countadd = document.createElement('span')

        let num = 1;
        document.getElementById('add').addEventListener('click', () => {
            num++;
            countadd.textContent = num;
            return num;
        })
        newli.textContent = "アイテム";
        countadd.textContent = num;
        const img = document.createElement('img')
        img.src = 'http://placehold.it/64x64';
        img.alt = `アイテム${num}`
        list.appendChild(newli);
        newli.appendChild(countadd);
        newli.appendChild(img);
    }
});


//削除を押したら消える。
const remove = document.getElementById('remove');
remove.addEventListener('click', () => {
    list.removeChild(list.firstChild)
    //追加を押した回数と削除を押した回数をひかくする プログラムを作る予定
    let renum = 1;
    document.getElementById('remove').addEventListener('click', () => {
        renum++;
        return renum;
    });

    if (renum > num) {
        ;
    }
})