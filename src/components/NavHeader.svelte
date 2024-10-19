<script>
	import logo from './img/logo.png';
	
	function showSettings(){
		const dialog = document.getElementById('settings')
		dialog.show();
	}
</script>

<nav>
	<a href="/" class="logo"
		><img alt="Santa Pantry Logo" src={logo} height="36px" /></a
	> <a class="secondary" id="settingsbtn" href="/" on:click={showSettings}>Settings</a>
</nav>


<style lang="scss">
	@import '../checkout.scss';
	.page {
    min-height: 100dvh;
    overflow: auto;
    display: flex;
	flex-direction: column;
}
nav {
	padding: $p-3 $p-4;
	// box-shadow:$nav-shadow;
	border-bottom: 1px solid $cardboard-lighter;
	display: flex;
	align-items: center;
	background: white;
	justify-content: space-between;
	
	/* // position: sticky;
	// top: 0;
	// z-index: 10000; */

	a.logo {
		height: 36px;
	}
}
</style>