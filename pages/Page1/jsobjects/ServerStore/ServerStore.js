export default {
  selected() {
    const list = get_servers.data?.data || [];
    const currentId = ServerSelect.selectedOptionValue;

    return (
      list.find(s => String(s.id) === String(currentId)) ||
      list[0] ||
      null
    );
  }
};