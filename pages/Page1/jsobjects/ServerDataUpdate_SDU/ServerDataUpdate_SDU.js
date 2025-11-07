export default {
  async refreshAll() {
    await SDU_get_domains.run();
    await SDU_get_mailboxes.run();
    await SDU_Server_status_options.run();
		await SDU_get_hostname_field_meta.run();
		await SDU_get_hostnames.run();
		await SDU_domain_fields.run();
		await get_domains.run();
  },
};
