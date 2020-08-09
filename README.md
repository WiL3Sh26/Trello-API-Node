nodejs から Trello API を呼ぶやつ

### 下準備

- Trello にログインした状態で [ここ](https://trello.com/1/appKey/generate) にアクセスし、
Key と Token を取得する

- `./config` フォルダと `trelloConfig.json` を作成し、以下の通り記述する

``` json
{
    "key":"[取得したKey]",
    "token":"[取得したToken]",
    "board":{
        "id":"[接続したいboardのid]",
        "list":{
            "[name]" : "[接続したいリストのid]"
        }
    }
}
```