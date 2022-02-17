import { Container, Tab, TabList, Tabs } from '@chakra-ui/react'
import React from 'react'
import { VISIBILITY_FILTER } from '../constans'

const VisibilityFilter = () => {
  return (
    <Container centerContent>
        <Tabs>
            <TabList>
                {Object.keys(VISIBILITY_FILTER).map(filterkey => {
                    const currentFilter = VISIBILITY_FILTER[filterkey];
                    return (
                        <Tab
                            key={`visibility-filter-${currentFilter}`}
                        >
                            {currentFilter}
                        </Tab>
                    )
                })}
            </TabList>
        </Tabs>
    </Container>
  )
}

export default VisibilityFilter