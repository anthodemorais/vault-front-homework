import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import Input from './components/Input'
import LoadingState from './components/LoadingState'
import Item from './components/NotificationItem/Item'
import { Notif } from './types'

const API = 'http://localhost:5000'

const App = () => {
  const [searchText, setSearchText] = useState('')
  const [isLoading, setLoading] = useState(false)
  const [results, setResults] = useState<null | Notif[]>(null)

  useEffect(() => {
    const effect = async () => {
      // FIXME there is something wrong with this loading state... to be investigated :D
      setLoading(true)
      const res = await fetch(`${API}/search?q=${searchText}`)
      const data = await res.json()
      setResults(data)
      setLoading(false)
    }
    effect()
  }, [searchText, setLoading, setResults])

  return (
    <Container>
      <Input
        value={searchText}
        onChange={setSearchText}
        placeholder="Type to filter events"
      />
      {isLoading ? (
        <LoadingState />
      ) : results ? (
        <Items>
          {results.map((r) => (
            <Item {...r} key={r.id} />
          ))}
        </Items>
      ) : null}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const Items = styled.div`
  width: 100%;
`

export default App
