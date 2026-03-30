import DateSelector from '@/components/DateSelector'
import FilterTabs from '@/components/FilterTabs'
import Header from '@/components/Header'
import TaskCard from '@/components/TaskCard'
import Colors from '@/constants/Colors'
import { FilterOptions, Task, TASKS } from '@/constants/tasks'
import { router } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const index = () => {
  const insets = useSafeAreaInsets()
  const [activeFilter, setActiveFilter] = useState<FilterOptions>("All")

  const statusMap: Record<string, string> = {
    "To do": "To-do",
    "Completed": "Done",
    "In Progress": "In Progress"
  };

  const filteredTasks = TASKS.filter((task) => {
    if (activeFilter === "All") return true;

    return task.status === statusMap[activeFilter];
  })

  const handleTaskPress = (task: Task) => {
    router.push({
      pathname: '/task-details',
      params: {id: task.id}
    })
  }
  return (
    <View style={[styles.container, { paddingTop: insets.top }]} >
      <StatusBar style='light' />
        {/* Header */}
        <Header />
        {/* Date Selector */}
        <DateSelector />
      <FlatList
        data={filteredTasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <TaskCard task={item} onPress={() => handleTaskPress(item)} />}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
        stickyHeaderIndices={[0]}
        ListHeaderComponent={
          <>
            {/* FiltersTab */}
            <View style={{ backgroundColor: Colors.background }}>
              <FilterTabs selected={activeFilter} onSelect={setActiveFilter} />
            </View>
          </>
        }
      />
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background
  },
  list: { paddingBottom: 24 }
})