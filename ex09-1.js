



//追加を押したら要素が増える。もっと良さげな書き方がありそう
const addbutton = document.getElementById('add')
const list = document.getElementById('list')
addbutton.addEventListener('click', (event) => {
    document.getElementById('add').onclick = function () {

        const newli = document.createElement('li')
        const countadd = document.createElement('span')

        var num = 1;
        document.getElementById('add').addEventListener('click', () => {
            num++;
            countadd.textContent = num;
            return num;
        })
        newli.textContent = "アイテム";
        countadd.textContent = num;
        list.appendChild(newli);
        newli.appendChild(countadd);
    }
});


//削除を押したら消える。
const remove = document.getElementById('remove');
remove.addEventListener('click', () => {
    list.removeChild(list.firstChild)
    //追加を押した回数と削除を押した回数をひかくする プログラムを作る予定
    var renum = 1;
    document.getElementById('remove').addEventListener('click', () => {
        renum++;
        return renum;
    });
    var num = 1;
    document.getElementById('add').addEventListener('click', () => {
        num++;
        countadd.textContent = num;
        return num;
    })

    if (renum > num) {
        ;
    }
})

//追加を押した回数をnumに入れて削除を押した回数をrenumに入れたつもりだったのですがnumが定義されていないというエラーが出てしまいます。いろいろ調べてみたのですが原因が分かりませんでした。教えていただけないでしょうか。
