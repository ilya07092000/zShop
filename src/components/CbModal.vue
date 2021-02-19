<template>
    <div class="modal__content">
        <p class="modal__title">Call back request</p>
        <div class="modal__body">
          <form action="">
                <div class="modal__divider">
                    <div class="form__input-wrap">
                        <label class="form__label" for="">Name</label>
                        <input class="form__input" type="text" name="" id="">
                    </div>
                    <div class="form__input-wrap">
                       <label class="form__label" for="">Phone</label>
                        <input class="form__input" type="text" name="" id="">
                    </div>
                </div>
                <div class="form__textarea-wrap">
                    <p>Comment</p>
                    <textarea name="" id="" cols="30" rows="10">
                    
                    </textarea>
                </div>
                <button class="form__submit cb__submit" @click.prevent="$emit('submit-handler')">
                    Send
                </button>
          </form>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import '../css/form-elems.scss';
    @import '../css/modal.scss';

    textarea {
        width: 100%;
        resize: none;
    }
</style>