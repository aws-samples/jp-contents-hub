// alert('JavaScript');
// URL, 日本語タイトル, 時刻を Kinesis Data Streams に流したい
function OnLinkClick() {
    alert('JavaScript');
    // ga('send', 'event', 'カテゴリ', 'アクション', 'ラベル', '値', { 'nonInteraction': true });
    // gtag('set', { 'dimension5': 'custom data' });
    gtag('event', 'click_event', {
        'event_category': 'TEL', 'event_label': '予約の電話', 'value': '0'
    });
    return false;
}