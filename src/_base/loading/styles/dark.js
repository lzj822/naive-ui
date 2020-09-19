import create from '../../../styles/_utils/create-component-base'

export default create({
  name: 'BaseLoading',
  theme: 'dark',
  getDerivedVariables ({ base, derived }) {
    return {
      color: derived.primaryColor
    }
  }
})