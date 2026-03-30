import Colors from '@/constants/Colors'
import { TASKS } from '@/constants/tasks'
import { Ionicons } from '@expo/vector-icons'
import { router, useLocalSearchParams } from 'expo-router'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const STATUS_COLOR = {
    'Done': Colors.statusDone,
    'In Progress': Colors.statusInProgress,
    'To-do': Colors.statusTodo
}

const TaskDetails = () => {
    const params = useLocalSearchParams()
    const id = Array.isArray(params.id) ? params.id[0] : params.id
    const task = TASKS.find((t) => t.id === id)

    const insets = useSafeAreaInsets()

    if (!task) {
        return <Text>Task not found</Text>
    }

    const handleBack = () => {
        router.push({
            pathname: '/',
        })
    }

    return (
        <View style={[styles.container, { paddingTop: insets.top + 10 }]}>

            <TouchableOpacity style={styles.iconButton} onPress={handleBack} >
                <Ionicons name='chevron-back' size={22} color={Colors.textPrimary} />
            </TouchableOpacity>

            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Task Details</Text>
            </View>

            {/* Content */}
            <View style={styles.content}>
                {/* Title */}
                <View style={styles.hero}>
                    <View style={[styles.icon, { backgroundColor: task.icon.backgroundColor }]}>
                        <Ionicons name={task.icon.name as any} size={22} color="#fff" />
                    </View>

                    <View style={{ flex: 1 }}>
                        <Text style={styles.category}>{task.category}</Text>
                        <Text style={styles.title} numberOfLines={2}>{task.title}</Text>
                    </View>
                </View>

                {/* Meta Row (Status + Time together) */}
                <View style={styles.metaRow}>
                    <View style={styles.statusBadge}>
                        <Text style={styles.statusText}>{task.status}</Text>
                    </View>

                    <View style={styles.row}>
                        <Ionicons name="time-outline" size={14} color={Colors.primary} />
                        <Text style={styles.time}>{task.time}</Text>
                    </View>
                </View>

                {/* Description */}
                <View style={styles.descriptionCard}>
                    <Text style={styles.sectionTitle}>Description</Text>
                    <Text style={styles.description}>{task.description}</Text>
                </View>
            </View>

        </View>
    )
}

export default TaskDetails

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    title: {
        fontSize: 22,
        fontWeight: "700",
        color: Colors.textPrimary,
        marginBottom: 10,
        flexShrink: 1,
    },
    statusBadge: {
        alignSelf: "flex-start",
        backgroundColor: Colors.primary,
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 12,
        marginBottom: 16,
    },
    statusText: {
        color: "#fff",
        fontSize: 12,
        fontWeight: "600",
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        gap: 6,
        marginBottom: 20,
    },
    time: {
        color: Colors.primary,
        fontSize: 14,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: "600",
        marginBottom: 8,
        color: Colors.textPrimary,
    },
    description: {
        fontSize: 14,
        color: Colors.textSecondary,
        lineHeight: 20,
    },
    header: {
        paddingHorizontal: 20,
        paddingBottom: 12,
    },

    headerTitle: {
        fontSize: 20,
        fontWeight: "700",
    },

    content: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 10,
    },
    hero: {
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
        marginBottom: 24,
    },

    metaRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20,
    },

    descriptionCard: {
        backgroundColor: Colors.surface,
        padding: 16,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: Colors.border,
    },
    icon: {
        width: 48,
        height: 48,
        borderRadius: 14,
        justifyContent: "center",
        alignItems: "center",
    },

    category: {
        fontSize: 12,
        color: Colors.textSecondary,
        marginBottom: 4,
    },
    iconButton: {
        width: 40,
        height: 40,
        borderRadius: 12,
        backgroundColor: Colors.surface,
        justifyContent: "center",
        alignItems: "center",
    },
})