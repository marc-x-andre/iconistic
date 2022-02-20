<template>
  <section>
    <b-steps
      v-model="innerActiveStep"
      mobile-mode="compact"
      type="is-black"
      size="is-small"
    >
      <b-step-item label="Choose your Icons" icon="emoticon" />
      <b-step-item label="On our Apparel" icon="tshirt-crew" />
      <b-step-item label="Wear it" icon="star-shooting" />
    </b-steps>
  </section>
</template>

<script>
export default {
  props: {
    activeStep: { type: Number, required: true }
  },
  data () {
    return {
      innerActiveStep: activeStep,
      isAnimated: true,
      isRounded: true,
      isStepsClickable: false,
      hasNavigation: true,
      customNavigation: false,
      isProfileSuccess: false
      // prevIcon: 'chevron-left',
      // nextIcon: 'chevron-right',
      // labelPosition: 'bottom',
      // mobileMode: 'minimalist'
    }
  }
}
</script>
