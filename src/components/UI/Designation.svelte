<script>
	// import Switch from './UI/Switch.svelte';
	import userHeart from '../../img/hand-heart.svg';
	import ChildDialog from '../../components/UI/Dialog.svelte';
	import Button from '../../components/UI/Button.svelte';
	import chervon from '../../img/chervon.svg';
	import Input from '../../components/UI/Input_Search.svelte';

	let closeModal;
	export let pdValue="Where it's needed the most"
	let searchVal = '';
	$: search = locations.filter(location => location.includes(searchVal));

	function openChild() {
		const desView = document.querySelector('#designation');
		desView.showModal();
		desView.querySelector('input').focus()
		console.log('dialog');
	}
	function saveProgram() {
		
		
		console.log('saved',search);
		
		closeModal();
	}
	function cancelProgram() {
		//theComment = theSavedComment
		closeModal();
		console.log('canceled');
		// theComment = theSavedComment
	}

	function choseResult(evt){
		pdValue = event.target.innerText;
		closeModal();
		

	}
	function navList(evt){
		console.log('hey')
	}

	// function returnResults(){
	// let search = locations.filter(location => location.startsWith(searchVal));
	// console.log('search',search)
	// }
	const locations = [
		'Where its needed the most',
		'Boston, MA 02111',
		'Worcester, MA 01944',
		'Springfield, MA 45432',
		'Midland Park, NJ 07432',
		'West Greenwich, RI 02817',
		'Billings, Montana 03921',
		'San Francisco, CA 94107',
		'Vineland, NJ 08360',
		'San Luis Obispo, CA 93405',
		'Uniontown, OH 44685',
		'Saint Cloud, FL 34769',
		'Chickamauga, GA 30707',
		'Highland Park, MI 48203',
		'Anna Maria, FL 34216',
		'Auburn, CA 95602',
		'Rohnert Park, CA 94928',
		'Fontana, CA 92335',
		'Jericho, NY 11753',
	];
	
</script>

<ChildDialog
	thename="designation"
	modalTitle="Id like to support"
	saveIt={() => saveProgram()}
	cancelIt={() => cancelProgram()}
	bind:closeMe={closeModal}
>
	<div class="dcontent" style="padding: 0px">
		<section id="pdsearch">
			<Input
				label={'Search designations'}
				hideLabel={true}
				bind:val={searchVal}
				required={false}
				placeholder={'Search...'}
			
			/>
		</section>
		<section id="pdresults">
			
			<ul>
				{#each search as results}
					<li class="result"  on:click={choseResult} on:keydown={event => navList(event)}>{results}</li>
				{/each}
			</ul>
		</section>
	</div>
</ChildDialog>

<li class="optionItem">
	<button aria-label="I would like to support" on:click={event => openChild(event)}>
		<div class="icon" aria-hidden="true">
			<img src={userHeart}  aria-hidden="true" alt='support' />
		</div>
		<div class="content">
			<span id="pdtitle" class="title">I'd like to support</span>
			<p class="subtitle">{pdValue}</p>
		</div>
		<div class="action">
			<img src={chervon} alt="chevron" aria-hidden="true" />
		</div>
	</button>
	<!-- <Switch /> -->
</li>

<style lang="scss">
	@import '../../theme.scss';
	.dcontent {
		display: flex;
		flex-direction: column;
		height: calc(100% - 64px);
		box-sizing: border-box;
	}
	.dcontent section {
		width: 100%;
		
		box-sizing: border-box;
	}
	#pdsearch {
		flex-shrink: 1;
		padding: $p-2 $p-6 $p-3;
	}
	#pdresults {
		
		overflow-y: auto;
		overflow-x: hidden;
		padding: $p-3 $p-0;
		margin-bottom: $p-4;
		-webkit-mask-image: linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 1%, rgba(255,255,255,1) 98%, rgba(255,255,255,0) 100%);
  		mask-image: linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 1%, rgba(255,255,255,1) 98%, rgba(255,255,255,0) 100%);
	}
	ul {
		list-style: none;
		padding:0;
		
	}
	li.result {
		text-align: left;
		padding: $p-2 $p-7_5;
		@include body;
		display: flex;
		align-items: center;
		min-height: 44px;
		box-sizing: border-box;
		cursor: pointer;
		transition: all .25s ease-in-out;
		&:hover {
			background-color: $neutral-95;
		}
	}
</style>
