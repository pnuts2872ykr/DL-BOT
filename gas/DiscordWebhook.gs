function sendDiscordMessage(name, message) {
  var webhookURL = "DiscordのWebhookを入れる"; // ここになにも打ち込まなければDiscord→LINEだけができるよ,逆にLINE→Discordだけやりたい人はreplitの作業全部すっ飛ばしていいよ
  // Discord webhookに投げるメッセージの内容
  var options = {
    "content" : name+" 「"+message+"」"
  };
  // データを作って投げる
  var response = UrlFetchApp.fetch(
    webhookURL,
    {
      method: "POST",
      contentType: "application/json",
      payload: JSON.stringify(options),
      muteHttpExceptions: true,
    }
  );
  // こちらはステータスコードを返す必要はない
}
