<template>
  <div>
    <div>
      <the-first-view-section />
    </div>
    <div>
      <the-about-section />
    </div>
    <the-event-section />
    <div>
      <the-team-section />
    </div>
    <div>
      <the-rec-event-section />
    </div>
    <div>
      <the-info-section />
    </div>
    <div>
      <the-requirements-section />
    </div>
    <div>
      <contact-section />
    </div>
  </div>
</template>

<script>
import TheFirstViewSection from '@/components/lp/recruitment/TheFirstView.vue'
import TheAboutSection from '@/components/lp/recruitment/TheAboutSection.vue'
import TheEventSection from '@/components/lp/recruitment/TheEventSection.vue'
import TheTeamSection from '@/components/lp/recruitment/TheTeamSection.vue'
import TheRecEventSection from '@/components/lp/recruitment/TheRecEventSection.vue'
import TheInfoSection from '@/components/lp/recruitment/TheInfoSection.vue'
import TheRequirementsSection from '@/components/lp/recruitment/TheRequirementsSection.vue'
import ContactSection from '@/components/lp/recruitment/ContactSection.vue'

export default {
  components: {
    TheFirstViewSection,
    TheAboutSection,
    TheEventSection,
    TheTeamSection,
    TheRecEventSection,
    TheInfoSection,
    TheRequirementsSection,
    ContactSection
  },
  layout: 'full'
}
</script>
