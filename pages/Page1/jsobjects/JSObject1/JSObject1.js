export default {
  selected() {
    const servers = get_servers.data?.data || [];
    return servers.find(s => s.id === ServerSelect.selectedOptionValue) || null;
  }
}
