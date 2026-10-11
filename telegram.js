
function kirimKeTelegram(nama, email, pesan, callback) {
  const token = "8592391901:AAHU1WBjxMLeraJ_Pg_6zS-Dsj_Q6ddmFvA";
  const chatId = "8573826065";
  
  const reply_text = `🚨 Ada Feedback Baru dari Web MBG\n\n👤 Nama: ${nama}\n📧 Email: ${email}\n💬 Pesan: ${pesan}`;

  fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: chatId,
      text: reply_text
    })
  })
  .then(res => res.json())
  .then(data => callback(data))
  .catch(err => callback({ ok: false, error: err }));
}
