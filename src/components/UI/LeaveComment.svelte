<script>
	// import Switch from './UI/Switch.svelte';
	import userHeart from '../../img/comment.svg';
	import ChildDialog from '../../components/UI/Dialog.svelte';
	import chervon from '../../img/chervon.svg'
	import Textarea from './Textarea.svelte';
	import Button from '../../components/UI/Button.svelte'
	export let theComment='';
	let theSavedComment=theComment;
	let closeModal;

	function openChild() {
		const comView = document.querySelector('#comments');
		comView.showModal();
		comView.querySelector('button').focus()
		console.log('dialog');
	}
	function saveComment(){
		theSavedComment = theComment
		console.log('saved');
		closeModal();
	}
	function cancelComment(){
		//theComment = theSavedComment
		closeModal();
		console.log('canceled');
		theComment = theSavedComment
		
	}
</script>

<ChildDialog thename="comments" modalTitle='Leave a comment'
saveIt={() => saveComment()}
cancelIt={() => cancelComment()}
bind:closeMe={closeModal}
>
	
	<!-- <div class="dheader">
		<Button label='Cancel' class='ghost' />
		<h2 id='comments_title'>Leave a comment</h2>
		<Button label='Save' class='ghost' /></div> -->
	<div class='dcontent' >
		<Textarea 
			label={'Leave a comment'} rows={10} required={false} limit={1000}
			placeholder={'Add a comment up to 1000 characters...'}
			hideLabel={true}
			bind:val={theComment}
			/>
	</div>
</ChildDialog>

<li class="optionItem">
	<button aria-labelledby='#cmttitle'  on:click={openChild}>
	<div class="icon">
		<img src={userHeart} aria-hidden="true" alt='comment' />
	</div>
	<div id='cmttitle' class='content'>
		<span id='cmt' class='title'>
			{#if theSavedComment !== ''}Your comment
			{:else}Leave a comment
			{/if}
		</span>
		<p class='subtitle'>{theSavedComment}</p>
	</div>
	<div class="action"><img src={chervon} alt='chevron' aria-hidden="true"> </div>
	<!-- <Switch /> -->
</button>
</li>

<style lang="scss" global>
	// @import '../theme.scss';
	#leaveacomment {
		height: 90%;
	}
</style>
