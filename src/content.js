const observer = new MutationObserver(() => {
    addLinksIfPrivate();
});

observer.observe(document.body, { childList: true, subtree: true });

function addLinksIfPrivate() {
    const rightCol = document.querySelector('.profile_rightcol');
    const alreadyAdded = document.querySelector('.profile_item_links'); 
    if (rightCol && document.body.classList.contains('private_profile') && !alreadyAdded) {
        addLinks();
    }
}

// only for private_profile
function addLinks() {
    const rightCol = document.querySelector('.profile_rightcol');

    if (rightCol) {
        // get Steam ID from URL (https://steamcommunity.com/id/STEAM_ID/)
        const urlMatch = window.location.href.match(/steamcommunity\.com\/id\/([^\/]+)/);
        const steamId = urlMatch ? urlMatch[1] : '';

        // block with links
        const html = `
<div data-panel='{"maintainX":true,"bFocusRingRoot":true,"flow-children":"row"}' class="profile_item_links">
    <div data-panel='{"focusable":true,"clickOnActivate":true}' role="button" class="profile_count_link ellipsis">
        <a href="https://tinyurl.com/bdft4ujw">
            <span class="count_link_label">(っ˶ ˘ ᵕ˘)ˆᵕ ˆ˶ς)</span>&nbsp;
            <span class="profile_count_link_total"></span>
        </a>
    </div>
    <div data-panel='{"focusable":true,"clickOnActivate":true}' role="button" class="profile_count_link ellipsis">
        <a href="https://steamcommunity.com/id/${steamId}/games/?tab=all">
            <span class="count_link_label">Games</span>&nbsp;
            <span class="profile_count_link_total"></span>
        </a>
    </div>
    <div data-panel='{"focusable":true,"clickOnActivate":true}' role="button" class="profile_count_link ellipsis">
        <a href="https://steamcommunity.com/id/${steamId}/inventory/">
            <span class="count_link_label">Inventory</span>&nbsp;
            <span class="profile_count_link_total">&nbsp;</span>
        </a>
    </div>
    <div data-panel='{"focusable":true,"clickOnActivate":true}' role="button" class="profile_count_link ellipsis">
        <a href="https://steamcommunity.com/id/${steamId}/screenshots/">
            <span class="count_link_label">Screenshots</span>&nbsp;
            <span class="profile_count_link_total"></span>
        </a>
    </div>
    <div data-panel='{"focusable":true,"clickOnActivate":true}' role="button" class="profile_count_link ellipsis">
        <a href="https://steamcommunity.com/id/${steamId}/videos/">
            <span class="count_link_label">Videos</span>&nbsp;
            <span class="profile_count_link_total"></span>
        </a>
    </div>
    <div data-panel='{"focusable":true,"clickOnActivate":true}' role="button" class="profile_count_link ellipsis">
        <a href="https://steamcommunity.com/id/${steamId}/myworkshopfiles/">
            <span class="count_link_label">Workshop Items</span>&nbsp;
            <span class="profile_count_link_total"></span>
        </a>
    </div>
    <div data-panel='{"focusable":true,"clickOnActivate":true}' role="button" class="profile_count_link ellipsis">
        <a href="https://steamcommunity.com/id/${steamId}/recommended/">
            <span class="count_link_label">Reviews</span>&nbsp;
            <span class="profile_count_link_total"></span>
        </a>
    </div>
    <div data-panel='{"focusable":true,"clickOnActivate":true}' role="button" class="profile_count_link ellipsis">
        <a href="https://steamcommunity.com/id/${steamId}/myworkshopfiles/?section=guides">
            <span class="count_link_label">Guides</span>&nbsp;
            <span class="profile_count_link_total">&nbsp;</span>
        </a>
    </div>
    <div data-panel='{"focusable":true,"clickOnActivate":true}' role="button" class="profile_count_link ellipsis">
        <a href="https://steamcommunity.com/id/${steamId}/images/">
            <span class="count_link_label">Artwork</span>&nbsp;
            <span class="profile_count_link_total"></span>
        </a>
    </div>
    <div style="clear: left;"></div>
</div>
        `;

        rightCol.insertAdjacentHTML('beforeend', html);
    }
}
