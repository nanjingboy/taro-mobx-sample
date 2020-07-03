import React, { useState } from 'react'
import { View, Button } from '@tarojs/components'
import Multiplier from './multiplier'

import './index.scss'

function Index() {
  const [multiplier, setMultiplier] = useState(0)
  return (
    <View>
      <Multiplier multiplier={multiplier}/>
      <Button onClick={() => setMultiplier(current => current + 1)}>Idncrement Multiplier</Button>
    </View>
  )
}

export default Index