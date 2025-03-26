document.addEventListener('DOMContentLoaded', function() {
    new TradingView.widget({
        "width": "100%",
        "height": "80%",
        "symbol": "BINANCE:BTCUSDT",
        "interval": "D",
        "timezone": "America/Sao_Paulo",
        "theme": "light",
        "style": "3",
        "locale": "pt_BR",
        "toolbar_bg": "#f1f3f6",
        "enable_publishing": false,
        "hide_side_toolbar": true,
        "allow_symbol_change": false,
        "container_id": "tradingview-widget",
        "hide_top_toolbar": true,
        "hide_legend": true,
        "save_image": false,
        "studies": [],
        "show_popup_button": false,
        "hide_volume": true
    });
}); 