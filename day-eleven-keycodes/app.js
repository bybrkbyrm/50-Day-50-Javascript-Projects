window.addEventListener('keydown', (event) => {
    //console.log(event);

    insert.innerHTML = `
    <div class="key">
    ${event.key === ' ' ? 'Space' : event.key}
    <small>event-key</small>
    </div>

    <div class="key">
    ${event.keyCode}
    <small>evenn.keyCode</small>
    </div>

    <div class="key">
    ${event.code}
    <small>event.code</small>
    </div>
    `
})